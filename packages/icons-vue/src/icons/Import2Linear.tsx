// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import2LinearSvg from '@ant-design/icons-svg/lib/asn/Import2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import2Linear: Import2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import2LinearSvg}></AntdIcon>;
};

Import2Linear.displayName = 'Import2Linear';
Import2Linear.inheritAttrs = false;
export default Import2Linear;