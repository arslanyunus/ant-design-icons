// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Import1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import1TwoTone: Import1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import1TwoToneSvg}></AntdIcon>;
};

Import1TwoTone.displayName = 'Import1TwoTone';
Import1TwoTone.inheritAttrs = false;
export default Import1TwoTone;