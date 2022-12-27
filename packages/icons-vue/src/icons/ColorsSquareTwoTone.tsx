// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ColorsSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquareTwoTone: ColorsSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquareTwoToneSvg}></AntdIcon>;
};

ColorsSquareTwoTone.displayName = 'ColorsSquareTwoTone';
ColorsSquareTwoTone.inheritAttrs = false;
export default ColorsSquareTwoTone;