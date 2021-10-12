var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"CurrentModule = IDFDataCanada","category":"page"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [IDFDataCanada]\nPrivate = false\nOrder   = [:function, :type]","category":"page"},{"location":"functions/#IDFDataCanada.data_download","page":"Functions","title":"IDFDataCanada.data_download","text":"data_download(output_dir::String, province::String; format::String, split::Bool, rm_temp::Bool)\n\nThis function downloads IDF data from ECCC Google Drive directory for multiple provinces     and generates CSV or netCDF files. CSV format is selected by default.\n\n\n\n\n\n","category":"function"},{"location":"functions/#IDFDataCanada.data_download-Tuple{String, Vector{String}}","page":"Functions","title":"IDFDataCanada.data_download","text":"data_download(output_dir::String, provinces::Array{String,1}; format::String, split::Bool, rm_temp::Bool)\n\nThis function downloads IDF data from ECCC Google Drive directory for a province     and generates CSV or netCDF files. CSV format is selected by default.\n\n\n\n\n\n","category":"method"},{"location":"functions/#IDFDataCanada.get_idf-Tuple{String}","page":"Functions","title":"IDFDataCanada.get_idf","text":"get_idf(fileName::String)\n\nThis function reads ECCC IDF text files and returns station infos (ID, latitude, longitude,     altitude, and station name) and a DataFrame containing observed annual maximum in mm     (Table 1) for different durations.\n\n\n\n\n\n","category":"method"},{"location":"functions/#IDFDataCanada.netcdf_generator-Tuple{String}","page":"Functions","title":"IDFDataCanada.netcdf_generator","text":"netcdf_generator(fileName::String)\n\nThis functions generates empty netCDF files (used by txt2netcdf).\n\n\n\n\n\n","category":"method"},{"location":"functions/#IDFDataCanada.txt2csv-Tuple{String, String, String}","page":"Functions","title":"IDFDataCanada.txt2csv","text":"txt2csv(input_dir::String, output_dir::String)\n\nThis function returns CSV files of observed annual maximum for each station     and one CSV file containing all station info (name, province, ID, lat, lon, elevation,     number of years, data CSV filenames, original filenames) for a province.\n\n\n\n\n\n","category":"method"},{"location":"functions/#IDFDataCanada.txt2netcdf-Tuple{String, String, String}","page":"Functions","title":"IDFDataCanada.txt2netcdf","text":"txt2netcdf(input_dir::String, output_dir::String)\n\nThis function returns netCDF files containing observed annual maximum data     and station info for each station of a province.\n\n\n\n\n\n","category":"method"},{"location":"starting/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"starting/#Installation","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"The following Julia command will install the package :","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> using Pkg\njulia> Pkg.add(\"IDFDataCanada\")","category":"page"},{"location":"starting/#Extract-data","page":"Getting Started","title":"Extract data","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"The key feature of IDFDataCanada is the data_download function. It can be used directly by providing the output directory (must be an existing folder), the province code (ex: \"QC\" for Quebec) and the format (CSV or netCDF). CSV format is selected by default. The two keyword arguments, split and rm_temp, can be set to extract data in a subfolder for each province or to keep the temporarily downloaded zip files.","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"using IDFDataCanada\ndata_download(output_dir::String, province::String; format::String=\"csv\", split::Bool=false, rm_temp::Bool=true)","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"data_download will create output files of the specified format in the output directory.","category":"page"},{"location":"starting/#Format","page":"Getting Started","title":"Format","text":"","category":"section"},{"location":"starting/#CSV","page":"Getting Started","title":"CSV","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"By choosing CSV format, it will return a CSV file for each station of the selected province with ECCC Short Duration Rainfall Intensity-Duration-Frequency Data from Table 1: Annual Maximum (mm).","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Année 5min 10min 15min 30min 1h 2h 6h 12h 24h\n         ","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Station informations for all the province are returned in a CSV file named infostations{PROVINCE_CODE}.csv :","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Name Province ID Lat Lon Elevation Number of years CSV filename Original filename\n        ","category":"page"},{"location":"starting/#NetCDF","page":"Getting Started","title":"NetCDF","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"By choosing NetCDF format, it will return a NetCDF file for each station of the selected province with station informations and ECCC Short Duration Rainfall Intensity-Duration-Frequency Data from Table 1: Annual Maximum (mm).","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"dimensions:\n\tstation = UNLIMITED ; // (1 currently)\n\tobs = UNLIMITED ; // (29 currently)\n\tname_strlen = UNLIMITED ; // (20 currently)\n\tid_strlen = UNLIMITED ; // (7 currently)\nvariables:\n\tfloat lon(station) ;\n\t\tlon:standard_name = \"longitude\" ;\n\t\tlon:long_name = \"station longitude\" ;\n\t\tlon:units = \"degrees_east\" ;\n\tfloat lat(station) ;\n\t\tlat:standard_name = \"latitude\" ;\n\t\tlat:long_name = \"station latitude\" ;\n\t\tlat:units = \"degrees_north\" ;\n\tfloat alt(station) ;\n\t\talt:long_name = \"vertical distance above the surface\" ;\n\t\talt:standard_name = \"height\" ;\n\t\talt:units = \"m\" ;\n\t\talt:positive = \"up\" ;\n\t\talt:axis = \"Z\" ;\n\tchar station_name(name_strlen, station) ;\n\t\tstation_name:long_name = \"station name\" ;\n\tchar station_ID(id_strlen, station) ;\n\t\tstation_ID:long_name = \"station id\" ;\n\t\tstation_ID:cf_role = \"timeseries_id\" ;\n\tint row_size(station) ;\n\t\trow_size:long_name = \"number of observations for this station\" ;\n\t\trow_size:sample_dimension = \"obs\" ;\n\tdouble time(obs) ;\n\t\ttime:standard_name = \"time\" ;\n\t\ttime:units = \"days since 1900-01-01\" ;\n\tfloat max_rainfall_amount_5min(obs) ;\n\t\tmax_rainfall_amount_5min:long_name = \"Annual maximum rainfall amount 5-minutes\" ;\n\t\tmax_rainfall_amount_5min:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_5min:cell_methods = \"time: sum over 5 min time: maximum within years\" ;\n\t\tmax_rainfall_amount_5min:units = \"mm\" ;\n\tfloat max_rainfall_amount_10min(obs) ;\n\t\tmax_rainfall_amount_10min:long_name = \"Annual maximum rainfall amount 10-minutes\" ;\n\t\tmax_rainfall_amount_10min:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_10min:cell_methods = \"time: sum over 10 min time: maximum within years\" ;\n\t\tmax_rainfall_amount_10min:units = \"mm\" ;\n\tfloat max_rainfall_amount_15min(obs) ;\n\t\tmax_rainfall_amount_15min:long_name = \"Annual maximum rainfall amount 15-minutes\" ;\n\t\tmax_rainfall_amount_15min:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_15min:cell_methods = \"time: sum over 15 min time: maximum within years\" ;\n\t\tmax_rainfall_amount_15min:units = \"mm\" ;\n\tfloat max_rainfall_amount_30min(obs) ;\n\t\tmax_rainfall_amount_30min:long_name = \"Annual maximum rainfall amount 30-minutes\" ;\n\t\tmax_rainfall_amount_30min:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_30min:cell_methods = \"time: sum over 30 min time: maximum within years\" ;\n\t\tmax_rainfall_amount_30min:units = \"mm\" ;\n\tfloat max_rainfall_amount_1h(obs) ;\n\t\tmax_rainfall_amount_1h:long_name = \"Annual maximum rainfall amount 1-hour\" ;\n\t\tmax_rainfall_amount_1h:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_1h:cell_methods = \"time: sum over 1 hour time: maximum within years\" ;\n\t\tmax_rainfall_amount_1h:units = \"mm\" ;\n\tfloat max_rainfall_amount_2h(obs) ;\n\t\tmax_rainfall_amount_2h:long_name = \"Annual maximum rainfall amount 2-hours\" ;\n\t\tmax_rainfall_amount_2h:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_2h:cell_methods = \"time: sum over 2 hour time: maximum within years\" ;\n\t\tmax_rainfall_amount_2h:units = \"mm\" ;\n\tfloat max_rainfall_amount_6h(obs) ;\n\t\tmax_rainfall_amount_6h:long_name = \"Annual maximum rainfall amount 6-hours\" ;\n\t\tmax_rainfall_amount_6h:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_6h:cell_methods = \"time: sum over 6 hours time: maximum within years\" ;\n\t\tmax_rainfall_amount_6h:units = \"mm\" ;\n\tfloat max_rainfall_amount_12h(obs) ;\n\t\tmax_rainfall_amount_12h:long_name = \"Annual maximum rainfall amount 12-hours\" ;\n\t\tmax_rainfall_amount_12h:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_12h:cell_methods = \"time: sum over 12 hours time: maximum within years\" ;\n\t\tmax_rainfall_amount_12h:units = \"mm\" ;\n\tfloat max_rainfall_amount_24h(obs) ;\n\t\tmax_rainfall_amount_24h:long_name = \"Annual maximum rainfall amount 24-hours\" ;\n\t\tmax_rainfall_amount_24h:coordinates = \"time lat lon alt station_ID\" ;\n\t\tmax_rainfall_amount_24h:cell_methods = \"time: sum over 24 hours time: maximum within years\" ;\n\t\tmax_rainfall_amount_24h:units = \"mm\" ;\n\n// global attributes:\n\t\t:featureType = \"timeSeries\" ;\n\t\t:title = \"Short Duration Rainfall Intensity-Duration-Frequency Data (ECCC)\" ;\n\t\t:Conventions = \"CF-1.7\" ;\n\t\t:comment = \"see H.2.4. Contiguous ragged array representation of time series\" ;\n\t\t:original_source = \"idf_v3-00_2019_02_27_702_PROV_STATIONID_STATIONNAME.txt\" ","category":"page"},{"location":"starting/#Examples","page":"Getting Started","title":"Examples","text":"","category":"section"},{"location":"starting/#CSV-2","page":"Getting Started","title":"CSV","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Let's say someone wants to extract IDF data for Prince Edward Island (PE) in CSV format in the present working directory after having already downloaded the zip file:","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> data_download(\"PE\", pwd(), \"csv\")\nArchive:  IDF_v3.00_2019_02_27_PE.zip\nreplace IDF_v3.00_2019_02_27_PE/idf_v3-00_2019_02_27_830_PE_8300301_CHARLOTTETOWN_A.pdf? [y]es, [n]o, [A]ll, [N]one, [r]ename: N\nCHARLOTTETOWN A\n8300301.csv : OK\nSUMMERSIDE\n8300596.csv : OK\nHARRINGTON CDA CS\n830P001.csv : OK","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Three CSV files (8300301.csv, 8300596.csv and 830P001.csv) corresponding to the Prince Edward Island stations data and another CSV file (info_stations_PE.csv) containing the stations information will be returned in the present working directory.","category":"page"},{"location":"starting/#NetCDF-2","page":"Getting Started","title":"NetCDF","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Then, let's say someone wants to extract IDF data for Prince Edward Island (PE) in NetCDF format in the present working directory:","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> using IDF\njulia> data_download(\"PE\", pwd(), \"netcdf\")\nIDF_v3.10_2020_03_27_PE.zip\nArchive:  IDF_v3.10_2020_03_27_PE.zip\n   creating: IDF_v3.10_2020_03_27_PE/\n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A.txt  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A_qq.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A_qq.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A_r.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A_r.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A_t.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300301_CHARLOTTETOWN_A_t.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS.txt  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS_qq.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS_qq.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS_r.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS_r.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS_t.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300562_ST._PETERS_t.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE.txt  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE_qq.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE_qq.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE_r.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE_r.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE_t.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8300596_SUMMERSIDE_t.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS.txt  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS_qq.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS_qq.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS_r.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS_r.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS_t.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_8305500_MAPLE_PLAINS_t.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS.txt  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS_qq.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS_qq.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS_r.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS_r.png  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS_t.pdf  \n  inflating: IDF_v3.10_2020_03_27_PE/idf_v-3.10_2020_03_27_830_PE_830P001_HARRINGTON_CDA_CS_t.png  \nCHARLOTTETOWN A\n8300301.nc : OK\nST. PETERS\n8300562.nc : OK\nSUMMERSIDE\n8300596.nc : OK\nMAPLE PLAINS\n8305500.nc : OK\nHARRINGTON CDA CS\n830P001.nc : OK","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Five netCDF files (8300301.nc, 8300562.nc, 8300596.nc, 8305500.nc and 830P001.nc) corresponding to the Prince Edward Island stations will be returned in the present working directory.","category":"page"},{"location":"#IDFDataCanada.jl","page":"IDFDataCanada.jl","title":"IDFDataCanada.jl","text":"","category":"section"},{"location":"","page":"IDFDataCanada.jl","title":"IDFDataCanada.jl","text":"IDFDataCanada.jl provides a set of methods to get ECCC IDF data from .txt files.","category":"page"},{"location":"#Overview","page":"IDFDataCanada.jl","title":"Overview","text":"","category":"section"},{"location":"","page":"IDFDataCanada.jl","title":"IDFDataCanada.jl","text":"Intensity-Duration-Frequency (IDF) data from Engineering Climate Datasets of Environment and Climate Change Canada (ECCC) are available for download in .txt format, a format that can be less convinient to use. IDFDataCanada.jl offers methods to get ECCC IDF data in NetCDF (.nc) or CSV (.csv) format automatically from the .txt files from ECCC's Google Drive.","category":"page"},{"location":"#Required-dependencies","page":"IDFDataCanada.jl","title":"Required dependencies","text":"","category":"section"},{"location":"#Julia-dependencies","page":"IDFDataCanada.jl","title":"Julia dependencies","text":"","category":"section"},{"location":"","page":"IDFDataCanada.jl","title":"IDFDataCanada.jl","text":"CSV\nDataFrames\nDates\nPyCall\nNCDatasets","category":"page"},{"location":"#Python-dependencies","page":"IDFDataCanada.jl","title":"Python dependencies","text":"","category":"section"},{"location":"","page":"IDFDataCanada.jl","title":"IDFDataCanada.jl","text":"gdown : to download large files from Google Drive without failing because of the security warning.","category":"page"},{"location":"#Command-line-utilities","page":"IDFDataCanada.jl","title":"Command-line utilities","text":"","category":"section"},{"location":"","page":"IDFDataCanada.jl","title":"IDFDataCanada.jl","text":"unzip","category":"page"}]
}
