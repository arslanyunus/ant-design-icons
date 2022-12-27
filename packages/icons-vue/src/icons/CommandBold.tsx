// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandBoldSvg from '@ant-design/icons-svg/lib/asn/CommandBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandBold: CommandBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandBoldSvg}></AntdIcon>;
};

CommandBold.displayName = 'CommandBold';
CommandBold.inheritAttrs = false;
export default CommandBold;