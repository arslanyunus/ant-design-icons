// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShoppingCartTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShoppingCartTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShoppingCartTwoTone: ShoppingCartTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShoppingCartTwoToneSvg}></AntdIcon>;
};

ShoppingCartTwoTone.displayName = 'ShoppingCartTwoTone';
ShoppingCartTwoTone.inheritAttrs = false;
export default ShoppingCartTwoTone;