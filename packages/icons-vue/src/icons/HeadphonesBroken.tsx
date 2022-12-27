// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphonesBrokenSvg from '@ant-design/icons-svg/lib/asn/HeadphonesBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphonesBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphonesBroken: HeadphonesBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphonesBrokenSvg}></AntdIcon>;
};

HeadphonesBroken.displayName = 'HeadphonesBroken';
HeadphonesBroken.inheritAttrs = false;
export default HeadphonesBroken;