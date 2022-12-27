// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Support24TwoToneSvg from '@ant-design/icons-svg/lib/asn/Support24TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Support24TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Support24TwoTone: Support24TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Support24TwoToneSvg}></AntdIcon>;
};

Support24TwoTone.displayName = 'Support24TwoTone';
Support24TwoTone.inheritAttrs = false;
export default Support24TwoTone;