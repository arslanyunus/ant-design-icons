// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import1OutlineSvg from '@ant-design/icons-svg/lib/asn/Import1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import1Outline: Import1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import1OutlineSvg}></AntdIcon>;
};

Import1Outline.displayName = 'Import1Outline';
Import1Outline.inheritAttrs = false;
export default Import1Outline;