// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshLeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RefreshLeftSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshLeftSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshLeftSquareTwoTone: RefreshLeftSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshLeftSquareTwoToneSvg}></AntdIcon>;
};

RefreshLeftSquareTwoTone.displayName = 'RefreshLeftSquareTwoTone';
RefreshLeftSquareTwoTone.inheritAttrs = false;
export default RefreshLeftSquareTwoTone;