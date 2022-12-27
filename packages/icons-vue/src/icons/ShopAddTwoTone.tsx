// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShopAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShopAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShopAddTwoTone: ShopAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShopAddTwoToneSvg}></AntdIcon>;
};

ShopAddTwoTone.displayName = 'ShopAddTwoTone';
ShopAddTwoTone.inheritAttrs = false;
export default ShopAddTwoTone;