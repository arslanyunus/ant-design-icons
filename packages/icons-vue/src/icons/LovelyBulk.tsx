// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LovelyBulkSvg from '@ant-design/icons-svg/lib/asn/LovelyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LovelyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LovelyBulk: LovelyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LovelyBulkSvg}></AntdIcon>;
};

LovelyBulk.displayName = 'LovelyBulk';
LovelyBulk.inheritAttrs = false;
export default LovelyBulk;