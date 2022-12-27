// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RefreshSquare2TwoToneSvg from '@ant-design/icons-svg/lib/asn/RefreshSquare2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RefreshSquare2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RefreshSquare2TwoTone: RefreshSquare2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RefreshSquare2TwoToneSvg}></AntdIcon>;
};

RefreshSquare2TwoTone.displayName = 'RefreshSquare2TwoTone';
RefreshSquare2TwoTone.inheritAttrs = false;
export default RefreshSquare2TwoTone;