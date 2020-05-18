const dump = [
	"0000000 2d 2d 2d 2d 2d 42 45 47 49 4e 20 50 47 50 20 53",
	"0000010 49 47 4e 45 44 20 4d 45 53 53 41 47 45 2d 2d 2d",
	"0000020 2d 2d 0a 48 61 73 68 3a 20 53 48 41 32 35 36 0a",
	"0000030 0a 59 6f 75 27 72 65 20 70 72 65 74 74 79 20 63",
	"0000040 75 72 69 6f 75 73 2c 20 72 69 67 68 74 3f 0a 0a",
	"0000050 2d 2d 2d 2d 2d 42 45 47 49 4e 20 50 47 50 20 53",
	"0000060 49 47 4e 41 54 55 52 45 2d 2d 2d 2d 2d 0a 0a 69",
	"0000070 51 49 7a 42 41 45 42 43 41 41 64 46 69 45 45 76",
	"0000080 66 62 70 51 64 7a 37 53 44 43 6c 79 37 4b 63 66",
	"0000090 62 4d 2b 66 65 76 46 38 65 73 46 41 6c 37 42 56",
	"00000a0 49 59 41 43 67 6b 51 66 62 4d 2b 66 65 76 46 0a",
	"00000b0 38 65 73 4d 4c 41 2f 2f 5a 6a 35 4e 38 48 61 64",
	"00000c0 52 4d 30 66 64 33 38 56 47 6c 35 43 4c 49 75 62",
	"00000d0 4c 34 6a 75 6f 38 46 7a 33 4c 52 50 4b 62 58 48",
	"00000e0 44 73 4e 4b 54 4c 33 78 6d 66 34 71 6f 50 37 5a",
	"00000f0 0a 75 7a 31 52 55 52 6a 74 69 38 70 68 51 4b 49",
	"0000100 7a 5a 38 69 69 39 69 4b 2b 2f 7a 79 66 77 79 4e",
	"0000110 71 69 4d 62 39 78 34 59 56 7a 48 50 52 5a 31 53",
	"0000120 63 48 66 7a 4a 48 51 4a 70 56 59 58 42 59 76 4f",
	"0000130 69 0a 2b 32 67 62 6d 71 42 74 49 66 56 68 51 6e",
	"0000140 6b 78 59 4e 36 52 6a 58 77 48 5a 7a 68 32 39 62",
	"0000150 4c 4f 6a 74 73 77 2b 50 6f 78 47 72 45 4c 4e 2b",
	"0000160 69 6c 42 47 6d 41 35 6c 70 49 70 50 2f 63 32 38",
	"0000170 47 67 0a 71 4a 71 44 69 2f 54 51 4e 68 45 2f 48",
	"0000180 49 67 47 68 5a 61 4d 58 62 42 69 30 46 66 77 7a",
	"0000190 31 7a 38 70 69 7a 49 70 4f 47 34 64 6d 32 30 34",
	"00001a0 49 69 74 47 54 4b 77 73 4f 63 58 39 35 6e 4d 50",
	"00001b0 38 5a 57 0a 4a 44 49 4c 61 7a 47 77 33 7a 74 4c",
	"00001c0 6c 76 4a 48 77 44 31 77 47 75 49 79 35 68 71 78",
	"00001d0 69 79 6d 67 72 53 52 57 6d 6f 64 37 62 75 67 4d",
	"00001e0 4b 44 37 45 43 4a 7a 6e 39 67 66 4d 37 2b 6b 33",
	"00001f0 77 6d 70 77 0a 51 4b 32 4c 74 52 64 2f 31 63 6c",
	"0000200 49 43 71 72 37 62 35 51 38 46 34 79 6f 6d 6a 52",
	"0000210 64 30 30 69 71 7a 38 62 52 48 54 51 4a 4b 49 48",
	"0000220 32 46 4a 59 68 66 2b 61 2f 4b 73 75 4b 69 67 6e",
	"0000230 4a 70 38 53 4a 0a 50 6c 6b 4d 4a 51 78 31 76 63",
	"0000240 31 32 6a 75 79 61 73 4b 69 4e 39 43 6d 65 59 69",
	"0000250 65 74 61 63 6b 79 65 43 71 75 79 59 35 56 63 33",
	"0000260 75 53 50 31 62 54 62 66 6c 50 45 62 4c 59 71 42",
	"0000270 71 75 57 5a 62 62 0a 6c 66 4b 65 31 70 42 34 61",
	"0000280 6c 54 2f 37 41 52 77 4a 6b 30 42 47 74 41 4b 54",
	"0000290 61 36 41 30 32 56 31 71 54 41 75 62 35 66 39 6e",
	"00002a0 71 66 6f 36 4f 4a 69 49 57 49 5a 75 5a 61 66 63",
	"00002b0 5a 4a 47 31 59 52 39 0a 72 61 52 55 52 78 6e 43",
	"00002c0 54 56 4b 64 62 35 73 57 64 62 31 39 45 77 62 33",
	"00002d0 37 66 2f 34 78 56 64 54 6c 42 31 4e 6f 6b 56 4a",
	"00002e0 49 4a 64 65 6d 55 73 70 61 7a 6f 59 52 4a 39 59",
	"00002f0 61 50 2b 4f 52 68 47 63 0a 58 49 64 6e 42 55 6f",
	"0000300 31 79 46 44 65 58 34 50 6c 32 39 68 4f 32 72 5a",
	"0000310 76 6b 56 66 6e 7a 46 72 53 45 78 49 57 36 4e 5a",
	"0000320 67 45 49 71 51 57 4e 6c 30 73 78 6c 41 59 42 31",
	"0000330 57 4f 2f 34 70 55 75 54 64 0a 73 37 31 46 45 35",
	"0000340 66 77 6c 4a 73 58 34 6f 4c 67 61 4c 37 5a 6f 34",
	"0000350 4b 6d 6a 6b 76 67 49 6e 38 30 30 61 6f 31 64 2b",
	"0000360 78 53 7a 39 42 51 77 42 61 63 61 46 45 3d 0a 3d",
	"0000370 32 51 6b 4f 0a 2d 2d 2d 2d 2d 45 4e 44 20 50 47",
	"0000380 50 20 53 49 47 4e 41 54 55 52 45 2d 2d 2d 2d 2d",
	"0000390 0a 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"
];

let line = 1;

$(document).ready(function() {

	setInterval(updateDump, 700);

});

function updateDump() {

	$("#dumpLine").text(dump[line]);

	if (line >= dump.length - 1)
		line = 0;
	else
		line++;

}