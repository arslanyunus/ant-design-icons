// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IconTwoToneSvg from '@ant-design/icons-svg/lib/asn/IconTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IconTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IconTwoTone: IconTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IconTwoToneSvg}></AntdIcon>;
};

IconTwoTone.displayName = 'IconTwoTone';
IconTwoTone.inheritAttrs = false;
export default IconTwoTone;