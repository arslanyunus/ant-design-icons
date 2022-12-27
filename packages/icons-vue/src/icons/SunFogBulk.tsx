// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunFogBulkSvg from '@ant-design/icons-svg/lib/asn/SunFogBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunFogBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunFogBulk: SunFogBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunFogBulkSvg}></AntdIcon>;
};

SunFogBulk.displayName = 'SunFogBulk';
SunFogBulk.inheritAttrs = false;
export default SunFogBulk;