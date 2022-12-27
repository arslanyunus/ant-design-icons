// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTickOutlineSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTickOutline: BrifecaseTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTickOutlineSvg}></AntdIcon>;
};

BrifecaseTickOutline.displayName = 'BrifecaseTickOutline';
BrifecaseTickOutline.inheritAttrs = false;
export default BrifecaseTickOutline;