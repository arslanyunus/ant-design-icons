// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RadarBulkSvg from '@ant-design/icons-svg/lib/asn/RadarBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RadarBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RadarBulk: RadarBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RadarBulkSvg}></AntdIcon>;
};

RadarBulk.displayName = 'RadarBulk';
RadarBulk.inheritAttrs = false;
export default RadarBulk;