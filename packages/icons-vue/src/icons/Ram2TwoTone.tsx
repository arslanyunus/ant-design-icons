// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ram2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Ram2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ram2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ram2TwoTone: Ram2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ram2TwoToneSvg}></AntdIcon>;
};

Ram2TwoTone.displayName = 'Ram2TwoTone';
Ram2TwoTone.inheritAttrs = false;
export default Ram2TwoTone;