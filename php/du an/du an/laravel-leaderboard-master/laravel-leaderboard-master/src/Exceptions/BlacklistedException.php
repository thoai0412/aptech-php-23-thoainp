<?php

declare(strict_types=1);

/*
 * This file is part of Laravel Leaderboard.
 *
 * (c) Brian Faust <hello@basecode.sh>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Artisanry\Leaderboard\Exceptions;

use Exception;

class BlacklistedException extends Exception
{
    /**
     * BlacklistedException constructor.
     *
     * @param string $type
     * @param int    $id
     */
    public function __construct($type, $id)
    {
        parent::__construct("Entity [{$type}] with ID [{$id}] is blacklisted.");
    }
}
