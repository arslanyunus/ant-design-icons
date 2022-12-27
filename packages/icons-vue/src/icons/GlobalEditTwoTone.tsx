// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/GlobalEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalEditTwoTone: GlobalEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalEditTwoToneSvg}></AntdIcon>;
};

GlobalEditTwoTone.displayName = 'GlobalEditTwoTone';
GlobalEditTwoTone.inheritAttrs = false;
export default GlobalEditTwoTone;