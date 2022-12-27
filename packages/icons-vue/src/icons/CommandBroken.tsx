// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandBrokenSvg from '@ant-design/icons-svg/lib/asn/CommandBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandBroken: CommandBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandBrokenSvg}></AntdIcon>;
};

CommandBroken.displayName = 'CommandBroken';
CommandBroken.inheritAttrs = false;
export default CommandBroken;