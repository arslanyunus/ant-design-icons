// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShuffleOutlineSvg from '@ant-design/icons-svg/lib/asn/ShuffleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShuffleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShuffleOutline: ShuffleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleOutlineSvg}></AntdIcon>;
};

ShuffleOutline.displayName = 'ShuffleOutline';
ShuffleOutline.inheritAttrs = false;
export default ShuffleOutline;