// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import1LinearSvg from '@ant-design/icons-svg/lib/asn/Import1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import1Linear: Import1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import1LinearSvg}></AntdIcon>;
};

Import1Linear.displayName = 'Import1Linear';
Import1Linear.inheritAttrs = false;
export default Import1Linear;