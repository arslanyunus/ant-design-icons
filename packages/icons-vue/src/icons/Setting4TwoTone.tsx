// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting4TwoToneSvg from '@ant-design/icons-svg/lib/asn/Setting4TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting4TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting4TwoTone: Setting4TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting4TwoToneSvg}></AntdIcon>;
};

Setting4TwoTone.displayName = 'Setting4TwoTone';
Setting4TwoTone.inheritAttrs = false;
export default Setting4TwoTone;