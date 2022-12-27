// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Import1BoldSvg from '@ant-design/icons-svg/lib/asn/Import1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Import1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Import1Bold: Import1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Import1BoldSvg}></AntdIcon>;
};

Import1Bold.displayName = 'Import1Bold';
Import1Bold.inheritAttrs = false;
export default Import1Bold;