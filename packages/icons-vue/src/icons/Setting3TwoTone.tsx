// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Setting3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting3TwoTone: Setting3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting3TwoToneSvg}></AntdIcon>;
};

Setting3TwoTone.displayName = 'Setting3TwoTone';
Setting3TwoTone.inheritAttrs = false;
export default Setting3TwoTone;