// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Sun1BoldSvg from '@ant-design/icons-svg/lib/asn/Sun1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Sun1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Sun1Bold: Sun1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Sun1BoldSvg}></AntdIcon>;
};

Sun1Bold.displayName = 'Sun1Bold';
Sun1Bold.inheritAttrs = false;
export default Sun1Bold;