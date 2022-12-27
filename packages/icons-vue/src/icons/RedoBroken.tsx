// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoBrokenSvg from '@ant-design/icons-svg/lib/asn/RedoBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoBroken: RedoBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoBrokenSvg}></AntdIcon>;
};

RedoBroken.displayName = 'RedoBroken';
RedoBroken.inheritAttrs = false;
export default RedoBroken;