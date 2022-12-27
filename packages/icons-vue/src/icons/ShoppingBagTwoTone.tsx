// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingBagTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingBagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingBagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingBagTwoTone: ShoppingBagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingBagTwoToneSvg}></AntdIcon>;
};

ShoppingBagTwoTone.displayName = 'ShoppingBagTwoTone';
ShoppingBagTwoTone.inheritAttrs = false;
export default ShoppingBagTwoTone;