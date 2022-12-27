// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoreTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreTwoTone: MoreTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreTwoToneSvg}></AntdIcon>;
};

MoreTwoTone.displayName = 'MoreTwoTone';
MoreTwoTone.inheritAttrs = false;
export default MoreTwoTone;