// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirplaneSquareBulkSvg from '@ant-design/icons-svg/lib/asn/AirplaneSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirplaneSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirplaneSquareBulk: AirplaneSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirplaneSquareBulkSvg}></AntdIcon>;
};

AirplaneSquareBulk.displayName = 'AirplaneSquareBulk';
AirplaneSquareBulk.inheritAttrs = false;
export default AirplaneSquareBulk;