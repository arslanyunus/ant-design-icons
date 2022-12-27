// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Sun1BrokenSvg from '@ant-design/icons-svg/lib/asn/Sun1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Sun1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Sun1Broken: Sun1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Sun1BrokenSvg}></AntdIcon>;
};

Sun1Broken.displayName = 'Sun1Broken';
Sun1Broken.inheritAttrs = false;
export default Sun1Broken;