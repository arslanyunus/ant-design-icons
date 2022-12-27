// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import2BrokenSvg from '@ant-design/icons-svg/lib/asn/Import2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import2Broken: Import2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import2BrokenSvg}></AntdIcon>;
};

Import2Broken.displayName = 'Import2Broken';
Import2Broken.inheritAttrs = false;
export default Import2Broken;