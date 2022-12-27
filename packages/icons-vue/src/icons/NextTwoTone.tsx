// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextTwoToneSvg from '@ant-design/icons-svg/lib/asn/NextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NextTwoTone: NextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NextTwoToneSvg}></AntdIcon>;
};

NextTwoTone.displayName = 'NextTwoTone';
NextTwoTone.inheritAttrs = false;
export default NextTwoTone;