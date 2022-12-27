// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Setting5TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting5TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting5TwoTone: Setting5TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting5TwoToneSvg}></AntdIcon>;
};

Setting5TwoTone.displayName = 'Setting5TwoTone';
Setting5TwoTone.inheritAttrs = false;
export default Setting5TwoTone;