// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import2OutlineSvg from '@ant-design/icons-svg/lib/asn/Import2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import2Outline: Import2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import2OutlineSvg}></AntdIcon>;
};

Import2Outline.displayName = 'Import2Outline';
Import2Outline.inheritAttrs = false;
export default Import2Outline;