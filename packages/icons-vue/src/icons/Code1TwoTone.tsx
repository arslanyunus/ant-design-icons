// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Code1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Code1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Code1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Code1TwoTone: Code1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Code1TwoToneSvg}></AntdIcon>;
};

Code1TwoTone.displayName = 'Code1TwoTone';
Code1TwoTone.inheritAttrs = false;
export default Code1TwoTone;