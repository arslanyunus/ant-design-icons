// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunBulkSvg from '@ant-design/icons-svg/lib/asn/SunBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunBulk: SunBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunBulkSvg}></AntdIcon>;
};

SunBulk.displayName = 'SunBulk';
SunBulk.inheritAttrs = false;
export default SunBulk;