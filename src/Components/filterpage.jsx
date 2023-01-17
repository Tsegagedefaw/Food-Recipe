import React from "react";
import {category} from '../data'
function FilterPage(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-3 border">
                    <h6>Category</h6>
                    <br/>
                    {
                    category.map(cate=><>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label class="form-check-label" for="defaultCheck1">
                            {cate}
                        </label>
                    </div>
                    </>) }
                    <hr/>
                    <h6>calorie</h6>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Min"/>
                            </div>
                            <div class="col">
                                <input type="text" className="form-control" placeholder="Max"/>
                            </div>
                            <div class="col">
                                <button  class="btn btn-primary">Go</button>
                            </div>
                        </div>
                    </form>
                    <hr/>
                    <h6>Alcohol Free?</h6>
                    <div className="d-flex gap-4">
                        <label class="form-check-label" for="alcohol">
                            Alcohol
                        </label>
                        <input class="form-check-input" type="checkbox" value="" id="alcohol"/>
                        
                    </div> 
                </div>
                <div className="col border">
                    Content
                </div>
            </div>
        </div>
    )
}
export default FilterPage