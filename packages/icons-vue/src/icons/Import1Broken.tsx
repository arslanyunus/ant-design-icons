// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import1BrokenSvg from '@ant-design/icons-svg/lib/asn/Import1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import1Broken: Import1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import1BrokenSvg}></AntdIcon>;
};

Import1Broken.displayName = 'Import1Broken';
Import1Broken.inheritAttrs = false;
export default Import1Broken;