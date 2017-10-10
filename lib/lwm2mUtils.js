/*
 * Copyright 2014 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of lightweightM2M-iotagent
 *
 * lightweightM2M-iotagent is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * lightweightM2M-iotagent is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with lightweightM2M-iotagent.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[contacto@tid.es]
 */
'use strict';

/**
 * Parse the register payload, containing the full set of objects supported by the LWM2M Client.
 *
 * @param {String} payload      List of supported objects. E.g.: '</0/1>,</3/14>,</2/9>'
 * @return {Array}              A list of the supported Object URIs.
 */
function parseObjectUriList(payload) {
    return payload.replace(/</g, '').replace(/>/g, '').split(',');
}

exports.parseObjectUriList = parseObjectUriList;

