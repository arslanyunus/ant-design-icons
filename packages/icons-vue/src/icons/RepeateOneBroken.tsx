// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateOneBrokenSvg from '@ant-design/icons-svg/lib/asn/RepeateOneBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateOneBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateOneBroken: RepeateOneBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateOneBrokenSvg}></AntdIcon>;
};

RepeateOneBroken.displayName = 'RepeateOneBroken';
RepeateOneBroken.inheritAttrs = false;
export default RepeateOneBroken;