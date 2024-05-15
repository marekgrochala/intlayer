import type { FC } from 'react';
import type { LogoBaseProps } from '.';

export const LogoWithTextBelowCircle: FC<LogoBaseProps> = ({
  bgColor,
  ...props
}) => (
  <svg
    width="1910"
    height="1400"
    viewBox="0 0 1910 1400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="955" cy="350" r="350" fill={bgColor} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M955 700C1148.3 700 1305 543.3 1305 350C1305 156.7 1148.3 0 955 0C761.7 0 605 156.7 605 350C605 543.3 761.7 700 955 700ZM785 305C760.147 305 740 325.147 740 350C740 374.853 760.147 395 785 395H1165C1189.85 395 1210 374.853 1210 350C1210 325.147 1189.85 305 1165 305H785ZM740 523C740 498.147 760.147 478 785 478H965C989.853 478 1010 498.147 1010 523C1010 547.853 989.853 568 965 568H785C760.147 568 740 547.853 740 523ZM785 130C760.147 130 740 150.147 740 175C740 199.853 760.147 220 785 220H1030C1054.85 220 1075 199.853 1075 175C1075 150.147 1054.85 130 1030 130H785Z"
      fill="currentColor"
    />
    <g filter="url(#filter0_d_2059_21)">
      <mask
        id="path-3-outside-1_2059_21"
        maskUnits="userSpaceOnUse"
        x="41"
        y="867"
        width="1860"
        height="472"
        fill="currentColor"
      >
        <rect fill={bgColor} x="41" y="867" width="1860" height="472" />
        <path d="M42.5 1233V868H115.5V1233H42.5ZM192.215 1233V973H257.715L258.215 1003.5H259.215C269.882 991.5 282.215 982.667 296.215 977C310.548 971 327.048 968 345.715 968C377.048 968 400.048 976.5 414.715 993.5C429.715 1010.17 437.215 1036.67 437.215 1073V1233H368.715V1086.5C368.715 1064.83 365.048 1049.17 357.715 1039.5C350.382 1029.5 338.715 1024.5 322.715 1024.5C310.715 1024.5 300.048 1027 290.715 1032C281.382 1036.67 274.048 1043.17 268.715 1051.5C263.715 1059.5 261.215 1069 261.215 1080V1233H192.215ZM610.52 1238C579.186 1238 556.52 1231.67 542.52 1219C528.853 1206.33 522.02 1185.5 522.02 1156.5V1026.5H465.52V973H522.02V888H591.02V973H675.52V1026.5H591.02V1139.5C591.02 1155.17 593.52 1166.17 598.52 1172.5C603.52 1178.5 612.52 1181.5 625.52 1181.5C632.52 1181.5 639.853 1180.83 647.52 1179.5C655.52 1178.17 662.853 1176.33 669.52 1174L675.02 1228.5C663.686 1231.83 652.853 1234.17 642.52 1235.5C632.186 1237.17 621.52 1238 610.52 1238ZM737.707 1233V868H807.707V1233H737.707ZM943.191 1238C917.525 1238 897.191 1230.83 882.191 1216.5C867.525 1202.17 860.191 1183 860.191 1159C860.191 1129 871.858 1105.83 895.191 1089.5C918.858 1073.17 952.358 1065 995.691 1065H1030.19C1030.19 1053.33 1028.69 1044.33 1025.69 1038C1023.02 1031.67 1018.19 1027.33 1011.19 1025C1004.52 1022.33 994.858 1021 982.191 1021C965.525 1021 948.191 1022.83 930.191 1026.5C912.191 1029.83 895.191 1034.67 879.191 1041L870.691 988C888.025 981.667 907.191 976.833 928.191 973.5C949.525 969.833 970.691 968 991.691 968C1018.36 968 1039.36 971.167 1054.69 977.5C1070.02 983.833 1081.19 994.5 1088.19 1009.5C1095.19 1024.17 1098.69 1044 1098.69 1069V1233H1033.19L1032.19 1203H1031.69C1022.36 1213.67 1009.52 1222.17 993.191 1228.5C976.858 1234.83 960.191 1238 943.191 1238ZM968.191 1186C979.858 1186 990.358 1184 999.691 1180C1009.02 1176 1016.36 1170.5 1021.69 1163.5C1027.36 1156.17 1030.19 1148.17 1030.19 1139.5V1110H1005.69C978.691 1110 958.525 1113.5 945.191 1120.5C931.858 1127.17 925.191 1137.67 925.191 1152C925.191 1162.67 928.858 1171 936.191 1177C943.858 1183 954.525 1186 968.191 1186ZM1183.11 1338L1226.11 1231.5L1123.61 973.5L1197.11 973L1260.11 1165.5H1261.11L1324.61 973H1398.61L1255.61 1338H1183.11ZM1560.46 1238C1513.79 1238 1477.79 1226.33 1452.46 1203C1427.46 1179.67 1414.96 1146.33 1414.96 1103C1414.96 1061 1426.46 1028 1449.46 1004C1472.46 980 1504.13 968 1544.46 968C1583.46 968 1613.46 979.333 1634.46 1002C1655.79 1024.67 1666.46 1056.83 1666.46 1098.5C1666.46 1103.17 1666.29 1108.5 1665.96 1114.5C1665.96 1120.5 1665.79 1125 1665.46 1128H1453.46V1080.5H1611.96L1602.46 1095C1602.46 1069 1597.63 1049.67 1587.96 1037C1578.63 1024.33 1564.13 1018 1544.46 1018C1523.79 1018 1508.29 1024.67 1497.96 1038C1487.63 1051 1482.46 1070.5 1482.46 1096.5V1116.5C1482.46 1139.83 1488.63 1157 1500.96 1168C1513.29 1179 1532.13 1184.5 1557.46 1184.5C1571.79 1184.5 1586.96 1183.17 1602.96 1180.5C1618.96 1177.83 1633.13 1174.17 1645.46 1169.5L1653.46 1222C1641.13 1227 1626.63 1230.83 1609.96 1233.5C1593.63 1236.5 1577.13 1238 1560.46 1238ZM1718.09 1233V973H1784.09L1784.59 1021.5H1786.09C1794.76 1009.83 1804.93 1000.17 1816.59 992.5C1828.59 984.5 1841.59 978.5 1855.59 974.5C1869.93 970.167 1884.59 968 1899.59 968V1026.5C1878.93 1026.5 1860.09 1030.33 1843.09 1038C1826.09 1045.67 1812.59 1056.17 1802.59 1069.5C1792.59 1082.5 1787.59 1097 1787.59 1113V1233H1718.09Z" />
      </mask>
      <path
        d="M42.5 1233V868H115.5V1233H42.5ZM192.215 1233V973H257.715L258.215 1003.5H259.215C269.882 991.5 282.215 982.667 296.215 977C310.548 971 327.048 968 345.715 968C377.048 968 400.048 976.5 414.715 993.5C429.715 1010.17 437.215 1036.67 437.215 1073V1233H368.715V1086.5C368.715 1064.83 365.048 1049.17 357.715 1039.5C350.382 1029.5 338.715 1024.5 322.715 1024.5C310.715 1024.5 300.048 1027 290.715 1032C281.382 1036.67 274.048 1043.17 268.715 1051.5C263.715 1059.5 261.215 1069 261.215 1080V1233H192.215ZM610.52 1238C579.186 1238 556.52 1231.67 542.52 1219C528.853 1206.33 522.02 1185.5 522.02 1156.5V1026.5H465.52V973H522.02V888H591.02V973H675.52V1026.5H591.02V1139.5C591.02 1155.17 593.52 1166.17 598.52 1172.5C603.52 1178.5 612.52 1181.5 625.52 1181.5C632.52 1181.5 639.853 1180.83 647.52 1179.5C655.52 1178.17 662.853 1176.33 669.52 1174L675.02 1228.5C663.686 1231.83 652.853 1234.17 642.52 1235.5C632.186 1237.17 621.52 1238 610.52 1238ZM737.707 1233V868H807.707V1233H737.707ZM943.191 1238C917.525 1238 897.191 1230.83 882.191 1216.5C867.525 1202.17 860.191 1183 860.191 1159C860.191 1129 871.858 1105.83 895.191 1089.5C918.858 1073.17 952.358 1065 995.691 1065H1030.19C1030.19 1053.33 1028.69 1044.33 1025.69 1038C1023.02 1031.67 1018.19 1027.33 1011.19 1025C1004.52 1022.33 994.858 1021 982.191 1021C965.525 1021 948.191 1022.83 930.191 1026.5C912.191 1029.83 895.191 1034.67 879.191 1041L870.691 988C888.025 981.667 907.191 976.833 928.191 973.5C949.525 969.833 970.691 968 991.691 968C1018.36 968 1039.36 971.167 1054.69 977.5C1070.02 983.833 1081.19 994.5 1088.19 1009.5C1095.19 1024.17 1098.69 1044 1098.69 1069V1233H1033.19L1032.19 1203H1031.69C1022.36 1213.67 1009.52 1222.17 993.191 1228.5C976.858 1234.83 960.191 1238 943.191 1238ZM968.191 1186C979.858 1186 990.358 1184 999.691 1180C1009.02 1176 1016.36 1170.5 1021.69 1163.5C1027.36 1156.17 1030.19 1148.17 1030.19 1139.5V1110H1005.69C978.691 1110 958.525 1113.5 945.191 1120.5C931.858 1127.17 925.191 1137.67 925.191 1152C925.191 1162.67 928.858 1171 936.191 1177C943.858 1183 954.525 1186 968.191 1186ZM1183.11 1338L1226.11 1231.5L1123.61 973.5L1197.11 973L1260.11 1165.5H1261.11L1324.61 973H1398.61L1255.61 1338H1183.11ZM1560.46 1238C1513.79 1238 1477.79 1226.33 1452.46 1203C1427.46 1179.67 1414.96 1146.33 1414.96 1103C1414.96 1061 1426.46 1028 1449.46 1004C1472.46 980 1504.13 968 1544.46 968C1583.46 968 1613.46 979.333 1634.46 1002C1655.79 1024.67 1666.46 1056.83 1666.46 1098.5C1666.46 1103.17 1666.29 1108.5 1665.96 1114.5C1665.96 1120.5 1665.79 1125 1665.46 1128H1453.46V1080.5H1611.96L1602.46 1095C1602.46 1069 1597.63 1049.67 1587.96 1037C1578.63 1024.33 1564.13 1018 1544.46 1018C1523.79 1018 1508.29 1024.67 1497.96 1038C1487.63 1051 1482.46 1070.5 1482.46 1096.5V1116.5C1482.46 1139.83 1488.63 1157 1500.96 1168C1513.29 1179 1532.13 1184.5 1557.46 1184.5C1571.79 1184.5 1586.96 1183.17 1602.96 1180.5C1618.96 1177.83 1633.13 1174.17 1645.46 1169.5L1653.46 1222C1641.13 1227 1626.63 1230.83 1609.96 1233.5C1593.63 1236.5 1577.13 1238 1560.46 1238ZM1718.09 1233V973H1784.09L1784.59 1021.5H1786.09C1794.76 1009.83 1804.93 1000.17 1816.59 992.5C1828.59 984.5 1841.59 978.5 1855.59 974.5C1869.93 970.167 1884.59 968 1899.59 968V1026.5C1878.93 1026.5 1860.09 1030.33 1843.09 1038C1826.09 1045.67 1812.59 1056.17 1802.59 1069.5C1792.59 1082.5 1787.59 1097 1787.59 1113V1233H1718.09Z"
        fill="currentColor"
      />
      <path
        d="M42.5 1233H41.5V1234H42.5V1233ZM42.5 868V867H41.5V868H42.5ZM115.5 868H116.5V867H115.5V868ZM115.5 1233V1234H116.5V1233H115.5ZM43.5 1233V868H41.5V1233H43.5ZM42.5 869H115.5V867H42.5V869ZM114.5 868V1233H116.5V868H114.5ZM115.5 1232H42.5V1234H115.5V1232ZM192.215 1233H191.215V1234H192.215V1233ZM192.215 973V972H191.215V973H192.215ZM257.715 973L258.715 972.984L258.699 972H257.715V973ZM258.215 1003.5L257.215 1003.52L257.231 1004.5H258.215V1003.5ZM259.215 1003.5V1004.5H259.664L259.962 1004.16L259.215 1003.5ZM296.215 977L296.59 977.927L296.601 977.922L296.215 977ZM414.715 993.5L413.958 994.153L413.965 994.161L413.972 994.169L414.715 993.5ZM437.215 1233V1234H438.215V1233H437.215ZM368.715 1233H367.715V1234H368.715V1233ZM357.715 1039.5L356.908 1040.09L356.913 1040.1L356.918 1040.1L357.715 1039.5ZM290.715 1032L291.162 1032.89L291.175 1032.89L291.187 1032.88L290.715 1032ZM268.715 1051.5L267.873 1050.96L267.867 1050.97L268.715 1051.5ZM261.215 1233V1234H262.215V1233H261.215ZM193.215 1233V973H191.215V1233H193.215ZM192.215 974H257.715V972H192.215V974ZM256.715 973.016L257.215 1003.52L259.215 1003.48L258.715 972.984L256.715 973.016ZM258.215 1004.5H259.215V1002.5H258.215V1004.5ZM259.962 1004.16C270.533 992.272 282.742 983.532 296.59 977.927L295.84 976.073C281.688 981.801 269.23 990.728 258.467 1002.84L259.962 1004.16ZM296.601 977.922C310.79 971.983 327.155 969 345.715 969V967C326.942 967 310.306 970.017 295.829 976.078L296.601 977.922ZM345.715 969C376.877 969 399.547 977.45 413.958 994.153L415.472 992.847C400.549 975.55 377.219 967 345.715 967V969ZM413.972 994.169C428.73 1010.57 436.215 1036.77 436.215 1073H438.215C438.215 1036.56 430.7 1009.77 415.458 992.831L413.972 994.169ZM436.215 1073V1233H438.215V1073H436.215ZM437.215 1232H368.715V1234H437.215V1232ZM369.715 1233V1086.5H367.715V1233H369.715ZM369.715 1086.5C369.715 1064.77 366.046 1048.83 358.512 1038.9L356.918 1040.1C364.051 1049.51 367.715 1064.9 367.715 1086.5H369.715ZM358.521 1038.91C350.946 1028.58 338.932 1023.5 322.715 1023.5V1025.5C338.498 1025.5 349.817 1030.42 356.908 1040.09L358.521 1038.91ZM322.715 1023.5C310.572 1023.5 299.74 1026.03 290.243 1031.12L291.187 1032.88C300.357 1027.97 310.857 1025.5 322.715 1025.5V1023.5ZM290.268 1031.11C280.782 1035.85 273.309 1042.47 267.873 1050.96L269.557 1052.04C274.788 1043.87 281.981 1037.49 291.162 1032.89L290.268 1031.11ZM267.867 1050.97C262.752 1059.15 260.215 1068.84 260.215 1080H262.215C262.215 1069.16 264.678 1059.85 269.563 1052.03L267.867 1050.97ZM260.215 1080V1233H262.215V1080H260.215ZM261.215 1232H192.215V1234H261.215V1232ZM542.52 1219L541.84 1219.73L541.849 1219.74L542.52 1219ZM522.02 1026.5H523.02V1025.5H522.02V1026.5ZM465.52 1026.5H464.52V1027.5H465.52V1026.5ZM465.52 973V972H464.52V973H465.52ZM522.02 973V974H523.02V973H522.02ZM522.02 888V887H521.02V888H522.02ZM591.02 888H592.02V887H591.02V888ZM591.02 973H590.02V974H591.02V973ZM675.52 973H676.52V972H675.52V973ZM675.52 1026.5V1027.5H676.52V1026.5H675.52ZM591.02 1026.5V1025.5H590.02V1026.5H591.02ZM598.52 1172.5L597.735 1173.12L597.743 1173.13L597.751 1173.14L598.52 1172.5ZM647.52 1179.5L647.355 1178.51L647.348 1178.51L647.52 1179.5ZM669.52 1174L670.514 1173.9L670.387 1172.64L669.189 1173.06L669.52 1174ZM675.02 1228.5L675.302 1229.46L676.098 1229.23L676.014 1228.4L675.02 1228.5ZM642.52 1235.5L642.392 1234.51L642.376 1234.51L642.36 1234.51L642.52 1235.5ZM610.52 1237C579.281 1237 556.918 1230.68 543.19 1218.26L541.849 1219.74C556.121 1232.65 579.091 1239 610.52 1239V1237ZM543.199 1218.27C529.827 1205.87 523.02 1185.37 523.02 1156.5H521.02C521.02 1185.63 527.879 1206.79 541.84 1219.73L543.199 1218.27ZM523.02 1156.5V1026.5H521.02V1156.5H523.02ZM522.02 1025.5H465.52V1027.5H522.02V1025.5ZM466.52 1026.5V973H464.52V1026.5H466.52ZM465.52 974H522.02V972H465.52V974ZM523.02 973V888H521.02V973H523.02ZM522.02 889H591.02V887H522.02V889ZM590.02 888V973H592.02V888H590.02ZM591.02 974H675.52V972H591.02V974ZM674.52 973V1026.5H676.52V973H674.52ZM675.52 1025.5H591.02V1027.5H675.52V1025.5ZM590.02 1026.5V1139.5H592.02V1026.5H590.02ZM590.02 1139.5C590.02 1155.21 592.514 1166.51 597.735 1173.12L599.304 1171.88C594.525 1165.83 592.02 1155.12 592.02 1139.5H590.02ZM597.751 1173.14C603.037 1179.48 612.415 1182.5 625.52 1182.5V1180.5C612.624 1180.5 604.002 1177.52 599.288 1171.86L597.751 1173.14ZM625.52 1182.5C632.583 1182.5 639.974 1181.83 647.691 1180.49L647.348 1178.51C639.732 1179.84 632.456 1180.5 625.52 1180.5V1182.5ZM647.684 1180.49C655.732 1179.15 663.122 1177.3 669.85 1174.94L669.189 1173.06C662.584 1175.37 655.307 1177.19 647.355 1178.51L647.684 1180.49ZM668.525 1174.1L674.025 1228.6L676.014 1228.4L670.514 1173.9L668.525 1174.1ZM674.737 1227.54C663.448 1230.86 652.666 1233.18 642.392 1234.51L642.648 1236.49C653.039 1235.15 663.924 1232.81 675.302 1229.46L674.737 1227.54ZM642.36 1234.51C632.082 1236.17 621.469 1237 610.52 1237V1239C621.57 1239 632.29 1238.16 642.679 1236.49L642.36 1234.51ZM737.707 1233H736.707V1234H737.707V1233ZM737.707 868V867H736.707V868H737.707ZM807.707 868H808.707V867H807.707V868ZM807.707 1233V1234H808.707V1233H807.707ZM738.707 1233V868H736.707V1233H738.707ZM737.707 869H807.707V867H737.707V869ZM806.707 868V1233H808.707V868H806.707ZM807.707 1232H737.707V1234H807.707V1232ZM882.191 1216.5L881.492 1217.22L881.501 1217.22L882.191 1216.5ZM895.191 1089.5L894.623 1088.68L894.618 1088.68L895.191 1089.5ZM1030.19 1065V1066H1031.19V1065H1030.19ZM1025.69 1038L1024.77 1038.39L1024.78 1038.41L1024.79 1038.43L1025.69 1038ZM1011.19 1025L1010.82 1025.93L1010.85 1025.94L1010.88 1025.95L1011.19 1025ZM930.191 1026.5L930.374 1027.48L930.382 1027.48L930.391 1027.48L930.191 1026.5ZM879.191 1041L878.204 1041.16L878.401 1042.39L879.559 1041.93L879.191 1041ZM870.691 988L870.348 987.061L869.573 987.344L869.704 988.158L870.691 988ZM928.191 973.5L928.348 974.488L928.361 974.486L928.191 973.5ZM1054.69 977.5L1055.07 976.576L1055.07 976.576L1054.69 977.5ZM1088.19 1009.5L1087.29 1009.92L1087.29 1009.93L1088.19 1009.5ZM1098.69 1233V1234H1099.69V1233H1098.69ZM1033.19 1233L1032.19 1233.03L1032.22 1234H1033.19V1233ZM1032.19 1203L1033.19 1202.97L1033.16 1202H1032.19V1203ZM1031.69 1203V1202H1031.24L1030.94 1202.34L1031.69 1203ZM993.191 1228.5L992.83 1227.57L992.83 1227.57L993.191 1228.5ZM1021.69 1163.5L1020.9 1162.89L1020.9 1162.89L1021.69 1163.5ZM1030.19 1110H1031.19V1109H1030.19V1110ZM945.191 1120.5L945.639 1121.39L945.647 1121.39L945.656 1121.39L945.191 1120.5ZM936.191 1177L935.558 1177.77L935.567 1177.78L935.575 1177.79L936.191 1177ZM943.191 1237C917.718 1237 897.654 1229.89 882.882 1215.78L881.501 1217.22C896.728 1231.77 917.332 1239 943.191 1239V1237ZM882.89 1215.78C868.449 1201.67 861.191 1182.78 861.191 1159H859.191C859.191 1183.22 866.6 1202.66 881.492 1217.22L882.89 1215.78ZM861.191 1159C861.191 1129.31 872.715 1106.45 895.765 1090.32L894.618 1088.68C871.001 1105.21 859.191 1128.69 859.191 1159H861.191ZM895.759 1090.32C919.194 1074.15 952.464 1066 995.691 1066V1064C952.252 1064 918.522 1072.18 894.623 1088.68L895.759 1090.32ZM995.691 1066H1030.19V1064H995.691V1066ZM1031.19 1065C1031.19 1053.27 1029.69 1044.1 1026.6 1037.57L1024.79 1038.43C1027.7 1044.57 1029.19 1053.4 1029.19 1065H1031.19ZM1026.61 1037.61C1023.83 1030.99 1018.76 1026.47 1011.51 1024.05L1010.88 1025.95C1017.62 1028.2 1022.22 1032.34 1024.77 1038.39L1026.61 1037.61ZM1011.56 1024.07C1004.72 1021.33 994.903 1020 982.191 1020V1022C994.813 1022 1004.33 1023.33 1010.82 1025.93L1011.56 1024.07ZM982.191 1020C965.451 1020 948.051 1021.84 929.992 1025.52L930.391 1027.48C948.332 1023.83 965.598 1022 982.191 1022V1020ZM930.009 1025.52C911.95 1028.86 894.887 1033.71 878.823 1040.07L879.559 1041.93C895.496 1035.62 912.433 1030.81 930.374 1027.48L930.009 1025.52ZM880.179 1040.84L871.679 987.842L869.704 988.158L878.204 1041.16L880.179 1040.84ZM871.035 988.939C888.299 982.631 907.402 977.812 928.348 974.488L928.035 972.512C906.98 975.854 887.75 980.702 870.348 987.061L871.035 988.939ZM928.361 974.486C949.64 970.828 970.75 969 991.691 969V967C970.633 967 949.41 968.838 928.022 972.514L928.361 974.486ZM991.691 969C1018.3 969 1039.15 972.162 1054.31 978.424L1055.07 976.576C1039.57 970.171 1018.42 967 991.691 967V969ZM1054.31 978.424C1069.41 984.662 1080.39 995.15 1087.29 1009.92L1089.1 1009.08C1081.99 993.85 1070.64 983.004 1055.07 976.576L1054.31 978.424ZM1087.29 1009.93C1094.2 1024.41 1097.69 1044.08 1097.69 1069H1099.69C1099.69 1043.92 1096.18 1023.92 1089.09 1009.07L1087.29 1009.93ZM1097.69 1069V1233H1099.69V1069H1097.69ZM1098.69 1232H1033.19V1234H1098.69V1232ZM1034.19 1232.97L1033.19 1202.97L1031.19 1203.03L1032.19 1233.03L1034.19 1232.97ZM1032.19 1202H1031.69V1204H1032.19V1202ZM1030.94 1202.34C1021.73 1212.86 1009.05 1221.28 992.83 1227.57L993.553 1229.43C1010 1223.05 1022.98 1214.47 1032.44 1203.66L1030.94 1202.34ZM992.83 1227.57C976.608 1233.86 960.064 1237 943.191 1237V1239C960.319 1239 977.108 1235.81 993.553 1229.43L992.83 1227.57ZM968.191 1187C979.973 1187 990.61 1184.98 1000.09 1180.92L999.297 1179.08C990.106 1183.02 979.743 1185 968.191 1185V1187ZM1000.09 1180.92C1009.55 1176.86 1017.03 1171.26 1022.49 1164.11L1020.9 1162.89C1015.68 1169.74 1008.5 1175.14 999.297 1179.08L1000.09 1180.92ZM1022.48 1164.11C1028.27 1156.62 1031.19 1148.4 1031.19 1139.5H1029.19C1029.19 1147.93 1026.44 1155.72 1020.9 1162.89L1022.48 1164.11ZM1031.19 1139.5V1110H1029.19V1139.5H1031.19ZM1030.19 1109H1005.69V1111H1030.19V1109ZM1005.69 1109C978.639 1109 958.276 1112.5 944.727 1119.61L945.656 1121.39C958.773 1114.5 978.744 1111 1005.69 1111V1109ZM944.744 1119.61C937.948 1123 932.796 1127.41 929.347 1132.84C925.897 1138.27 924.191 1144.67 924.191 1152H926.191C926.191 1144.99 927.819 1138.98 931.036 1133.91C934.254 1128.84 939.102 1124.66 945.639 1121.39L944.744 1119.61ZM924.191 1152C924.191 1162.92 927.962 1171.56 935.558 1177.77L936.825 1176.23C929.755 1170.44 926.191 1162.41 926.191 1152H924.191ZM935.575 1177.79C943.477 1183.97 954.39 1187 968.191 1187V1185C954.66 1185 944.24 1182.03 936.808 1176.21L935.575 1177.79ZM1183.11 1338L1182.18 1337.63L1181.62 1339H1183.11V1338ZM1226.11 1231.5L1227.03 1231.87L1227.18 1231.5L1227.03 1231.13L1226.11 1231.5ZM1123.61 973.5L1123.6 972.5L1122.14 972.51L1122.68 973.869L1123.61 973.5ZM1197.11 973L1198.06 972.689L1197.83 971.995L1197.1 972L1197.11 973ZM1260.11 1165.5L1259.16 1165.81L1259.38 1166.5H1260.11V1165.5ZM1261.11 1165.5V1166.5H1261.83L1262.06 1165.81L1261.11 1165.5ZM1324.61 973V972H1323.88L1323.66 972.687L1324.61 973ZM1398.61 973L1399.54 973.365L1400.07 972H1398.61V973ZM1255.61 1338V1339H1256.29L1256.54 1338.36L1255.61 1338ZM1184.03 1338.37L1227.03 1231.87L1225.18 1231.13L1182.18 1337.63L1184.03 1338.37ZM1227.03 1231.13L1124.53 973.131L1122.68 973.869L1225.18 1231.87L1227.03 1231.13ZM1123.61 974.5L1197.11 974L1197.1 972L1123.6 972.5L1123.61 974.5ZM1196.16 973.311L1259.16 1165.81L1261.06 1165.19L1198.06 972.689L1196.16 973.311ZM1260.11 1166.5H1261.11V1164.5H1260.11V1166.5ZM1262.06 1165.81L1325.56 973.313L1323.66 972.687L1260.16 1165.19L1262.06 1165.81ZM1324.61 974H1398.61V972H1324.61V974ZM1397.67 972.635L1254.67 1337.64L1256.54 1338.36L1399.54 973.365L1397.67 972.635ZM1255.61 1337H1183.11V1339H1255.61V1337ZM1452.46 1203L1451.78 1203.73L1451.78 1203.74L1452.46 1203ZM1449.46 1004L1448.74 1003.31L1448.74 1003.31L1449.46 1004ZM1634.46 1002L1633.73 1002.68L1633.73 1002.69L1634.46 1002ZM1665.96 1114.5L1664.96 1114.44L1664.96 1114.47V1114.5H1665.96ZM1665.46 1128V1129H1666.36L1666.45 1128.11L1665.46 1128ZM1453.46 1128H1452.46V1129H1453.46V1128ZM1453.46 1080.5V1079.5H1452.46V1080.5H1453.46ZM1611.96 1080.5L1612.8 1081.05L1613.81 1079.5H1611.96V1080.5ZM1602.46 1095H1601.46V1098.35L1603.3 1095.55L1602.46 1095ZM1587.96 1037L1587.16 1037.59L1587.16 1037.6L1587.17 1037.61L1587.96 1037ZM1497.96 1038L1498.74 1038.62L1498.75 1038.61L1497.96 1038ZM1500.96 1168L1501.63 1167.25L1501.63 1167.25L1500.96 1168ZM1645.46 1169.5L1646.45 1169.35L1646.26 1168.13L1645.11 1168.56L1645.46 1169.5ZM1653.46 1222L1653.84 1222.93L1654.57 1222.63L1654.45 1221.85L1653.46 1222ZM1609.96 1233.5L1609.8 1232.51L1609.79 1232.51L1609.78 1232.52L1609.96 1233.5ZM1560.46 1237C1513.95 1237 1478.23 1225.38 1453.14 1202.26L1451.78 1203.74C1477.36 1227.29 1513.63 1239 1560.46 1239V1237ZM1453.14 1202.27C1428.4 1179.17 1415.96 1146.13 1415.96 1103H1413.96C1413.96 1146.53 1426.52 1180.16 1451.78 1203.73L1453.14 1202.27ZM1415.96 1103C1415.96 1061.19 1427.41 1028.46 1450.18 1004.69L1448.74 1003.31C1425.52 1027.54 1413.96 1060.81 1413.96 1103H1415.96ZM1450.18 1004.69C1472.96 980.93 1504.34 969 1544.46 969V967C1503.92 967 1471.97 979.07 1448.74 1003.31L1450.18 1004.69ZM1544.46 969C1583.26 969 1612.96 980.268 1633.73 1002.68L1635.19 1001.32C1613.96 978.399 1583.66 967 1544.46 967V969ZM1633.73 1002.69C1654.84 1025.11 1665.46 1057 1665.46 1098.5H1667.46C1667.46 1056.67 1656.75 1024.22 1635.19 1001.31L1633.73 1002.69ZM1665.46 1098.5C1665.46 1103.14 1665.3 1108.46 1664.96 1114.44L1666.96 1114.56C1667.29 1108.54 1667.46 1103.19 1667.46 1098.5H1665.46ZM1664.96 1114.5C1664.96 1120.49 1664.79 1124.95 1664.47 1127.89L1666.45 1128.11C1666.79 1125.05 1666.96 1120.51 1666.96 1114.5H1664.96ZM1665.46 1127H1453.46V1129H1665.46V1127ZM1454.46 1128V1080.5H1452.46V1128H1454.46ZM1453.46 1081.5H1611.96V1079.5H1453.46V1081.5ZM1611.12 1079.95L1601.62 1094.45L1603.3 1095.55L1612.8 1081.05L1611.12 1079.95ZM1603.46 1095C1603.46 1068.91 1598.62 1049.31 1588.76 1036.39L1587.17 1037.61C1596.64 1050.02 1601.46 1069.09 1601.46 1095H1603.46ZM1588.77 1036.41C1579.2 1023.42 1564.36 1017 1544.46 1017V1019C1563.9 1019 1578.06 1025.25 1587.16 1037.59L1588.77 1036.41ZM1544.46 1017C1523.56 1017 1507.74 1023.75 1497.17 1037.39L1498.75 1038.61C1508.85 1025.58 1524.03 1019 1544.46 1019V1017ZM1497.18 1037.38C1486.64 1050.63 1481.46 1070.39 1481.46 1096.5H1483.46C1483.46 1070.61 1488.61 1051.37 1498.74 1038.62L1497.18 1037.38ZM1481.46 1096.5V1116.5H1483.46V1096.5H1481.46ZM1481.46 1116.5C1481.46 1140 1487.67 1157.49 1500.3 1168.75L1501.63 1167.25C1489.58 1156.51 1483.46 1139.67 1483.46 1116.5H1481.46ZM1500.3 1168.75C1512.89 1179.98 1532.01 1185.5 1557.46 1185.5V1183.5C1532.25 1183.5 1513.7 1178.02 1501.63 1167.25L1500.3 1168.75ZM1557.46 1185.5C1571.86 1185.5 1587.08 1184.16 1603.13 1181.49L1602.8 1179.51C1586.84 1182.17 1571.73 1183.5 1557.46 1183.5V1185.5ZM1603.13 1181.49C1619.18 1178.81 1633.41 1175.13 1645.81 1170.44L1645.11 1168.56C1632.85 1173.2 1618.75 1176.86 1602.8 1179.51L1603.13 1181.49ZM1644.47 1169.65L1652.47 1222.15L1654.45 1221.85L1646.45 1169.35L1644.47 1169.65ZM1653.09 1221.07C1640.84 1226.04 1626.41 1229.85 1609.8 1232.51L1610.12 1234.49C1626.84 1231.81 1641.42 1227.96 1653.84 1222.93L1653.09 1221.07ZM1609.78 1232.52C1593.51 1235.51 1577.07 1237 1560.46 1237V1239C1577.19 1239 1593.75 1237.49 1610.14 1234.48L1609.78 1232.52ZM1718.09 1233H1717.09V1234H1718.09V1233ZM1718.09 973V972H1717.09V973H1718.09ZM1784.09 973L1785.09 972.99L1785.08 972H1784.09V973ZM1784.59 1021.5L1783.59 1021.51L1783.6 1022.5H1784.59V1021.5ZM1786.09 1021.5V1022.5H1786.6L1786.9 1022.1L1786.09 1021.5ZM1816.59 992.5L1817.14 993.336L1817.15 993.332L1816.59 992.5ZM1855.59 974.5L1855.87 975.462L1855.88 975.459L1855.88 975.457L1855.59 974.5ZM1899.59 968H1900.59V967H1899.59V968ZM1899.59 1026.5V1027.5H1900.59V1026.5H1899.59ZM1802.59 1069.5L1803.39 1070.11L1803.39 1070.1L1802.59 1069.5ZM1787.59 1233V1234H1788.59V1233H1787.59ZM1719.09 1233V973H1717.09V1233H1719.09ZM1718.09 974H1784.09V972H1718.09V974ZM1783.09 973.01L1783.59 1021.51L1785.59 1021.49L1785.09 972.99L1783.09 973.01ZM1784.59 1022.5H1786.09V1020.5H1784.59V1022.5ZM1786.9 1022.1C1795.5 1010.52 1805.58 1000.94 1817.14 993.336L1816.04 991.664C1804.28 999.398 1794.02 1009.15 1785.29 1020.9L1786.9 1022.1ZM1817.15 993.332C1829.06 985.39 1841.97 979.433 1855.87 975.462L1855.32 973.538C1841.22 977.567 1828.13 983.61 1816.04 991.668L1817.15 993.332ZM1855.88 975.457C1870.12 971.152 1884.69 969 1899.59 969V967C1884.5 967 1869.73 969.181 1855.3 973.543L1855.88 975.457ZM1898.59 968V1026.5H1900.59V968H1898.59ZM1899.59 1025.5C1878.8 1025.5 1859.83 1029.36 1842.68 1037.09L1843.5 1038.91C1860.36 1031.31 1879.05 1027.5 1899.59 1027.5V1025.5ZM1842.68 1037.09C1825.55 1044.82 1811.91 1055.42 1801.79 1068.9L1803.39 1070.1C1813.28 1056.92 1826.64 1046.52 1843.5 1038.91L1842.68 1037.09ZM1801.8 1068.89C1791.67 1082.06 1786.59 1096.77 1786.59 1113H1788.59C1788.59 1097.23 1793.52 1082.94 1803.39 1070.11L1801.8 1068.89ZM1786.59 1113V1233H1788.59V1113H1786.59ZM1787.59 1232H1718.09V1234H1787.59V1232Z"
        fill="currentColor"
        mask="url(#path-3-outside-1_2059_21)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2059_21"
        x="38.5"
        y="868"
        width="1865.09"
        height="478"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2059_21"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2059_21"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);