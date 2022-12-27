// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import2BoldSvg from '@ant-design/icons-svg/lib/asn/Import2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import2Bold: Import2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import2BoldSvg}></AntdIcon>;
};

Import2Bold.displayName = 'Import2Bold';
Import2Bold.inheritAttrs = false;
export default Import2Bold;