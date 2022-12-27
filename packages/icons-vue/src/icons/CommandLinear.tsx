// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandLinearSvg from '@ant-design/icons-svg/lib/asn/CommandLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandLinear: CommandLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandLinearSvg}></AntdIcon>;
};

CommandLinear.displayName = 'CommandLinear';
CommandLinear.inheritAttrs = false;
export default CommandLinear;