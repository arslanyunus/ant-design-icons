// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Import2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import2TwoTone: Import2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import2TwoToneSvg}></AntdIcon>;
};

Import2TwoTone.displayName = 'Import2TwoTone';
Import2TwoTone.inheritAttrs = false;
export default Import2TwoTone;