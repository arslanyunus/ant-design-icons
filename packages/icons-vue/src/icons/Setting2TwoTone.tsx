// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Setting2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting2TwoTone: Setting2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting2TwoToneSvg}></AntdIcon>;
};

Setting2TwoTone.displayName = 'Setting2TwoTone';
Setting2TwoTone.inheritAttrs = false;
export default Setting2TwoTone;