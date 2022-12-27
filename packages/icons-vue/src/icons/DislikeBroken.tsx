// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeBrokenSvg from '@ant-design/icons-svg/lib/asn/DislikeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeBroken: DislikeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeBrokenSvg}></AntdIcon>;
};

DislikeBroken.displayName = 'DislikeBroken';
DislikeBroken.inheritAttrs = false;
export default DislikeBroken;