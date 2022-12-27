// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshRightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RefreshRightSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshRightSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshRightSquareTwoTone: RefreshRightSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshRightSquareTwoToneSvg}></AntdIcon>;
};

RefreshRightSquareTwoTone.displayName = 'RefreshRightSquareTwoTone';
RefreshRightSquareTwoTone.inheritAttrs = false;
export default RefreshRightSquareTwoTone;