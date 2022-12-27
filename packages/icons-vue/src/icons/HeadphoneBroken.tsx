// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphoneBrokenSvg from '@ant-design/icons-svg/lib/asn/HeadphoneBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphoneBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphoneBroken: HeadphoneBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneBrokenSvg}></AntdIcon>;
};

HeadphoneBroken.displayName = 'HeadphoneBroken';
HeadphoneBroken.inheritAttrs = false;
export default HeadphoneBroken;