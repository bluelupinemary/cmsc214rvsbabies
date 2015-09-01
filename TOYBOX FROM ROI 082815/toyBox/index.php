<html>
	<head>
		<title>ToyBox</title>
		<link rel="toybox icon" href="images/toybox.ico" type="image/x-icon" />

		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/toyBox.css"/>
		<script src="js/toyBox.js"></script>
		<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
		<script type="text/javascript" src="js/jquery-linedtextarea.js"></script>
		<script>
			$(function() {
				$(".lined").linedtextarea(
					{}
				);
			});
		</script>
	
	</head>
	<body>
		<!-- Site banner --> 
		<div class="bandiv">
			<img class="banner" src="images/banner.png"></img>
		
			<h1 class="bantitle"><b>
				<label id="t">T</label>
				<label id="o">O</label>
				<label id="y">Y</label>
				<label id="b">B</label>
				<label id="o">O</label>
				<label id="x">X</label></b>
			</h1>
				<img class="banicon" src="images/toybox_icon.png" height="50px" width="60px">
		</div>
	
		<section class="container-fluid">

			<div id="navigationPanel">
				<button onclick="showTabs(this.value)" value="ddTab" id="ddButton" class="navigationButtons">Drag&Drop</button>
					<button onclick="showTabs(this.value)" value="scriptTab" id="scriptButton" class="defaultOption">Script</button>
					<button onclick="showTabs(this.value)" value="resultsTab" id="resultsButton" class="navigationButtons">Results</button>
				<p>
					<img id="emptytoybox" src="images/emptytoybox.png" ondrop="drop(event)" ondragover="allowDrop(event)" draggable="false"/>
				</p>
			</div>
			<div id="sectionPanel">
			<!-- Start for panel1 -->
			<div id="panel1" style="display: none">
				
				<div id="menu">
					<div id="menuItems" >
						<button onclick="showTabs(this.value)" value="variablesTab" id="varButton" class="defaultOption2">VARIABLES</button>
						<button onclick="showTabs(this.value)" value="operationsTab" id="operationsButton" class="menuTabs">OPERATIONS</button>
						<button onclick="showTabs(this.value)" value="operatorsTab" id="operatorsButton" class="menuTabs">OPERATORS</button>
						<button onclick="showTabs(this.value)" value="othersTab" id="othersButton" class="menuTabs">OTHERS</button>
					</div>
					<div id="menuPane">
						<div id="variables" ondrop="drop(event)" ondragover="allowDrop(event)">
							<img title="RDUCKY" id="rducky" src="images/rducky.gif" draggable="true" ondragstart="drag(event)" />
							<img title="NUMBLK" id="numblk" src="images/numblk.gif" draggable="true" ondragstart="drag(event)" />
							<img title="LETBLK" id="letblk" src="images/letbloc.gif" draggable="true" ondragstart="drag(event)" />
							<img title="MBOX" id="mbox" src="images/mbox.jpg" draggable="true" ondragstart="drag(event)" />
						</div>

						<div id="operations" style="display:none">
							<img title="HOOLA" id="hoola" src="images/hoola.gif" draggable="true" ondragstart="drag(event)" />
							<img title="HOOP" id="hoop" src="images/hoop.jpg" draggable="true" ondragstart="drag(event)" />
							<img id="exclpt" src="images/excpoint.png" draggable="true" ondragstart="drag(event)" />
							<img id="semicolon" src="images/semicolon.png" draggable="true" ondragstart="drag(event)" />
							<img title="MATCHBOARD" id="mbopen" src="images/mbOpen.png" draggable="true" ondragstart="drag(event)" />
							<img title="HOLE" id="starhole" src="images/starHole.png" draggable="true" ondragstart="drag(event)" />
							<img title="HOLE" id="squarehole" src="images/squareHole.png" draggable="true" ondragstart="drag(event)" />
							<img title="HOLE" id="circlehole" src="images/circleHole.png" draggable="true" ondragstart="drag(event)" />
							<img id="mbclose" src="images/mbClose.png" draggable="true" ondragstart="drag(event)" />
						</div>

						<div id="operators" style="display:none">
							<img id="plusop" src="images/plusOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="minusop" src="images/minusOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="multop" src="images/multOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="divop" src="images/divOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="lthop" src="images/lthOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="gtop" src="images/gtOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="lteop" src="images/lteOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="gteop" src="images/gteOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="equop" src="images/eqOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="neqop" src="images/neqOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="andop" src="images/andOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="orop" src="images/orOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="notop" src="images/notOp.png" draggable="true" ondragstart="drag(event)" />
							<img id="asop" src="images/asOp.png" draggable="true" ondragstart="drag(event)"/>							
							<img id="opare" src="images/opare.png" draggable="true" ondragstart="drag(event)" />
							<img id="cpare" src="images/cpare.png" draggable="true" ondragstart="drag(event)" />
						</div>

						<div id="others" style="display:none">
							<img title="OPEN_PLAYPEN" id="ppopen" src="images/ppOpen.png" draggable="true" ondragstart="drag(event)" />
							<img title="CLOSE_PLAYPEN" id="ppclose" src="images/ppClose.png" draggable="true" ondragstart="drag(event)" />
							<img id="letters" src="images/letters.png" draggable="true" ondragstart="drag(event)" />
							<img id="numbers" src="images/numbers.png" draggable="true" ondragstart="drag(event)" />
							<img title="FIND_PLAYMATE" id="findpm" src="images/find.gif" draggable="true" ondragstart="drag(event)" />
							<img title="RETUNR_TO_PLAYMATE" id="returnpm" src="images/return.jpg" draggable="true" ondragstart="drag(event)" />
							<img id="give" src="images/give.png" draggable="true" ondragstart="drag(event)" />
							<img id="show" src="images/show.png" draggable="true" ondragstart="drag(event)" />
							<img id="collect" src="images/collect.png" draggable="true" ondragstart="drag(event)" />
							<img id="pound" src="images/pound.png" draggable="true" ondragstart="drag(event)" />
							<img id="comma" src="images/comma.png" draggable="true" ondragstart="drag(event)" />
						</div>
					</div> <!-- end of menuPane -->
				</div> <!-- end of menu -->
				

				<form id="ddeditor" method="POST">
					<input type="hidden" value="" id="vardec" name="vardec" />
					<input type="hidden" value="" id="funcdec" name="funcdec" />
					<input type="hidden" value="" id="maincode" name="maincode"/>
					<input type="hidden" value="" id="functsection" name="functsection" />

					<div id="declarations">
						<div id="varDeclaration" ondrop="drop(event)" ondragover="allowDrop(event)">
							<p>Variable Declaration (Main)</p>
							<ul id="varList"></ul>
						</div>

						<div id="funcDeclaration" ondrop="drop(event)" ondragover="allowDrop(event)">
							<p>Variable Declaration (Functions)</p>
							<ul id="varList"></ul>
						</div>
					</div>

					<div id="mainCode" ondrop="drop(event)" ondragover="allowDrop(event)">
						<p>Main Code</p>

					</div>


					<div id="funcSection" ondrop="drop(event)" ondragover="allowDrop(event)">
						<p>Functions</p>
					</div>

					<button type="button" id="processform" onclick="processForm()">CONVERT!</button>
				</form>

			</div>
			<!-- End of panel1 -->

			<!-- Start of panel2 -->
			<div id="panel2" class="codeArea">
				
				<form method="post" method="POST" name="editor">
					<textarea name="query_input" id="query_input" class="lined"></textarea>
					
					<button type="button" id="runCode" onclick="processCode()">RUN</button>
					<!--<input type="reset" id="resetCode" value="CLEAR"/>-->
					<input type="button" id="clearCode" value="NEW" onclick="clearEditor()"/>
					
				</form>
			</div>
			<!-- End of panel2 -->

			<!-- Start of panel3 -->

			<div id="panel3" class="result" style="display: none">
			</div>
			<!-- End of panel3 -->
			</div>
		</section>
	</body>

</html>

