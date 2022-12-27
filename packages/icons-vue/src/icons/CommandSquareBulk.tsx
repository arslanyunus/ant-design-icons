// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandSquareBulkSvg from '@ant-design/icons-svg/lib/asn/CommandSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandSquareBulk: CommandSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandSquareBulkSvg}></AntdIcon>;
};

CommandSquareBulk.displayName = 'CommandSquareBulk';
CommandSquareBulk.inheritAttrs = false;
export default CommandSquareBulk;